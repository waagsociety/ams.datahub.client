#!/bin/bash
. ./comm_vars.sh

if [ -e ${AMS_CLIENT_BACKUP} ]
then
  /bin/tar xf ${AMS_CLIENT_BACKUP} --overwrite -C /
  rm ${AMS_CLIENT_BACKUP}
fi
