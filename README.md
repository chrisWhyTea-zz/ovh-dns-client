# ovh-dns-client

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

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

If you want some beautified output, add '-t' to get a table view output like this:
```
# If you want to get the records of the 'adress.xyz' Zone/Domain
ovhDNS records adress.xyz -t

┌────────────┬────────────┬───────────┬───────────┬───────────────┐
│ ID         │ Zone       │ SubDomain │ FieldType │ Target        │
├────────────┼────────────┼───────────┼───────────┼───────────────┤
│ 1234567890 │ adress.xyz │           │ TXT       │ A test record │
└────────────┴────────────┴───────────┴───────────┴───────────────┘

```

You can add a dns-record to a zone/domain
```
# We want to add an TXT record on the plain zone/domain
ovhDNS create address.xyz "" TXT "A test record"
```
allowed fieldTypes are : "TXT","CNAME","MX","A" and "AAAA"
The Beautified '-t' option is also available for the creation command

If you want to delete an entry you have to put in the record data just like you created them
```
# We want to add an TXT record on the plain zone/domain
ovhDNS delete address.xyz "" TXT "A test record"
```
Beware if you have multipe records with exactly the same data and you want to delete them all you need to call this command multiple times (It only deletes one record each time)

#ToDo
- Add Option to just write the whole URL instead of seperate subDomain and Domain (for a much easyer hook creation for letsencryt.sh dns-01 challange)

-Write Tests and use Continious Integration

-Write a better ReadMe

<<<<<<< Updated upstream
- Commented code? uhmmm.. okay but only because no one was asking nicely...

- Dryout the code... the is a lot of repeating stuff...
=======

[downloads-image]: https://img.shields.io/npm/dm/ovh-dns-client.svg
[npm-url]: https://www.npmjs.com/package/ovh-dns-client
[npm-image]: https://img.shields.io/npm/v/ovh-dns-client.svg
>>>>>>> Stashed changes
