. ./comm_vars.sh

CURBY_GIT_DIR=/home/nathan/datahub_site
APP_GIT_DIR=/home/nathan/ams.datahub.client

PRODUCTION_DIR=${DEST_DIR}
STAGING_DIR=${PRODUCTION_DIR}/beta

tar czf ${DEST_DIR} ${AMS_CLIENT_BACKUP}

if [ "$1 " == "beta" ]
then
	CURBY_DEST_DIR=${STAGING_DIR}
else
	CURBY_DEST_DIR=${PRODUCTION_DIR}
fi

APP_DEST_DIR=${CURBY_DEST_DIR}/browser-assets

if [ ! -d "${CURBY_GIT_DIR}" ]
then
	git clone https://github.com/waagsociety/datahub_site.git ${CURBY_GIT_DIR}
fi

cd ${CURBY_GIT_DIR};

if ! git pull
then
    echo "ERROR pulling"
    exit 1
fi

cd -

COPY_NOT="content|README"
MY_FILES="$(ls  ${CURBY_GIT_DIR} | grep -vE "${COPY_NOT}")"

for i in ${MY_FILES}
do
	sudo cp -r ${CURBY_GIT_DIR}/${i} ${CURBY_DEST_DIR}/
done

sudo cp -r /home/nathan/config ${CURBY_DEST_DIR}/site
sudo chown -R www-data:www-data ${CURBY_DEST_DIR}
sudo chmod -R ug-w,o-rwx ${CURBY_DEST_DIR}
sudo chmod -R u+w,g+w ${CURBY_DEST_DIR}/site/accounts
sudo chmod u+w,g+w ${CURBY_DEST_DIR}/thumbs
sudo chmod u+w,g+w ${CURBY_DEST_DIR}/assets/avatars
sudo chmod -R u+w,g+w ${CURBY_DEST_DIR}/content


# Install app

if [ -d "${APP_DEST_DIR}" ]
then
    sudo rm -rf ${APP_DEST_DIR}
fi

sudo mkdir ${APP_DEST_DIR}

if [ ! -d "${APP_GIT_DIR}" ]
then
	git clone https://github.com/waagsociety/ams.datahub.client.git ${APP_GIT_DIR}
fi

cd ${APP_GIT_DIR};

if ! git pull
then
    echo "ERROR pulling"
    exit 1
fi

if ! npm prune && npm install
then
    echo "Error running npm install"
    exit 1
fi

if ! npm run build
then
    echo "Error running npm build"
    exit 1
fi

cd -

sudo cp -r ${APP_GIT_DIR}/dist ${APP_DEST_DIR}
sudo chown -R www-data:www-data ${APP_DEST_DIR}
sudo chmod -R ug-w,o-rwx ${APP_DEST_DIR}
