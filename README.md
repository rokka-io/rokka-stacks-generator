# Rokka Stacks Generator

This small cli tools generates rokka stacks and uploads them to rokka.io.

## How it works
Add a stacks.yml file to your component folder.

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
