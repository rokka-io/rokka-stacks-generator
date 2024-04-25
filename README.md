# Rokka Stacks Generator

This small cli tools generates rokka stacks and uploads them to rokka.io.

## Installation
Run the following command in your project folder:

```
npm install rokka-stacks-generator
```

## How to use it
Add a stacks.yml file to your component folder. The command will recursively 
search all yml files and create a json file that will be uploaded to rokka.io

```
npx rokka-stacks-generator --folder /your/folder --output /output/rokka.json --apikey your_api_key --organization your-rokka-organization
```

### Example

```yml
name: slider_image
ratio:
  w: 4
  h: 3
pictures:
  mobile:
    width: 200
    height: 100
  tablet:
    width: 600
    height: 400
  desktop:
    width: 500
    height: 350
  widescreen:
    width: 800
    height: 600
```

Now you can run the cli command and search for the stacks.yml definitions. Provide a folder to look for.

### Noop example

In case you need a `noop` stack, you can generate one by defining `noop` as the value of the `pictures` viewport value.

Example:

```yml
name: noop_test
pictures:
  sm: noop
```
