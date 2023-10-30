import parseArgs from './cli-upload';
import RokkaHandler, { Style } from './rokka';
import path from 'path';
import * as fs from 'fs';

async function start() {
    const args = parseArgs();
    console.log(args);

    try {
        const rokka = new RokkaHandler(
            args.options.organization,
            args.options.apikey
        );

        const src = path.join(__dirname, args.options.json);

        console.log('Source JSON', src);

        const styles: Style[] = JSON.parse(fs.readFileSync(src, 'utf-8'));

        let promises = [];
        for (var key in styles) {
            const style: Style = styles[key] as Style;
            promises.push(
                style.stacks.map((definition: any) => {
                    return rokka.createStack(definition);
                })
            );
        }

        await Promise.all(promises);
    } catch (error) {
        console.log(error);
    }
}

start();
