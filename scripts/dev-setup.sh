#!/usr/bin/env bash
echo "Alias /print-forms /var/www/print-forms" > /etc/httpd/conf.d/print-froms.ssl
chown bahmni:bahmni /etc/httpd/conf.d/print-froms.ssl
ln -s /bahmni/print-forms/dist/print-forms /var/www/print-forms
/etc/init.d/httpd restart
