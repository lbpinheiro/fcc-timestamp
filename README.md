# FCC-Timestamp

A [FreeCodeCamp](https://www.freecodecamp.com/challenges/timestamp-microservice) exercice.

## User stories
* I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
* If it does, it returns both the Unix timestamp and the natural language form of that date.
* If it does not contain a date or Unix timestamp, it returns null for those properties.

### Live site

[https://fcc-timestampapi.herokuapp.com](https://fcc-timestampapi.herokuapp.com)

## Some examples

Inputs
```
https://fcc-timestampapi.herokuapp.com/231544800
https://fcc-timestampapi.herokuapp.com/June%206,%201999
https://fcc-timestampapi.herokuapp.com/45fgtyyg  /*invalid unix timestamp and natural date*/
```

JSON Outputs
```
{"unix":231544800,"natural":"May 4, 1977"}
{"unix":928620000,"natural":"June 6, 1999"}
{"unix":null,"natural":null}
```

## Author

* **Lucas Batochi Pinheiro**

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* FreeCodeCamp
