#!/usr/bin/env bash
echo "Alias /print-forms /var/www/print-forms/" > /etc/httpd/conf.d/print_forms_ssl.conf
chown bahmni:bahmni /etc/httpd/conf.d/print-froms.ssl.conf
ln -s /bahmni/print-forms/dist/print-forms /var/www/print-forms
/etc/init.d/httpd restart
