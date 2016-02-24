# ovh-dns-client

A easy to use CLI-Client for OVH DNS Service... Just install it, get API Credentials 

##How To Setup

Install it via npm
```
npm install -g ovh-dns-client
```

And get your [API Credentials from OVH](https://api.ovh.com/createToken/?GET=/domain/zone/*&POST=/domain/zone/*&PUT=/domain/zone/*&DELETE=/domain/zone/*)

##How to get Startet

You can add the API Credentials as Environment variables
```
export OVH_DNS_APP_KEY=your_app_key_here
export OVH_DNS_APP_SECRET=your_app_secret_here
export OVH_DNS_CONSUMER_KEY=your_consumer_key_here
ovhDNS records adress.xyz
```
Or add them via '-' Options 
```
ovhDNS -K 'your_app_key_here' -S 'your_app_secret_here' -C 'your_consumer_key_here' records adress.xyz
```

##How to use it
Right now you can read all your dns-records per zone (aka Domain)
```
# If you want to get the records of the 'adress.xyz' Zone/Domain
ovhDNS records adress.xyz
```

And you can add a dns-record to a zone/domain
```
# We want to add an TXT record on the plain zone/domain
ovhDNS create address.xyz "" TXT "A test record"
```
allowed fieldTypes are : "TXT","CNAME","MX","A" and "AAAA"
