import { Command, OptionValues } from 'commander';

const parseArguments = (): OptionValues => {
    const program = new Command();
    program
        .description('Generate rokka stacks from yml files.')
        .name('rokka-stacks-generator')
        .usage('<source-file> [options] arguments')
        .requiredOption('-f, --folder <folder>', 'source folder')
        .requiredOption('-o, --output <output>', 'output folder')
        .requiredOption(
            '-ra, --apikey <apikey>',
            'rokka API key',
            process.env.ROKKA_KEY
        )
        .requiredOption(
            '-ro, --organization <organization>',
            'rokka organization',
            process.env.ROKKA_ORG
        );

    program.parse(process.argv);

    return { options: program.opts(), args: program.args };
};

export default parseArguments;
