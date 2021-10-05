# Rokka Stacks Generator

This small cli tools generates rokka stacks and uploads them to rokka.io.

## Installation
Run the following command in your project folder:
```
npm install rokka-stacks-generator
```
Then install it with: `npm install @ayalon/rokka-stacks-generator'

## How to use it
Add a stacks.yml file to your component folder. The command will recursively 
search all yml files and create a json file that will be uploaded to rokka.io

```
npx rokka-stacks-generator --folder /your/folder --output /output/rokka.json --apikey your_api_key --organization your-rokka-organization
```

### Example

```
name: slider_image
ratio:
  w: 730
  h: 486
pictures:
  mobile:
    width: 730
    height: 486
  tablet:
    width: 730
    height: 486
  desktop:
    width: 730
    height: 486
  widescreen:
    width: 730
    height: 486

```

Now you can run the cli command and search for the stacks.yml definitions. Provide a folder to look for.
