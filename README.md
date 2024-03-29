# Another Scrambler

A simple tool to scramble sentences.

## Getting started

To run the application, you need to have [Node.js](https://nodejs.org/en/) installed.

### Installation

Clone the repository and install the dependencies:

```bash
git clone
cd scrambler
npm install
```

### Usage

To run the application, use the following command:

```bash
npm run start
```

### Docker 

To build the application in a Docker container, use the following command:

```bash
docker buildx build --load -t scrambler .
```

To run the build application in a Docker container, use the following command:

```bash
docker run -p 3000:3000 scrambler
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
