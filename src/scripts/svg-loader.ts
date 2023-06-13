import { GetIcon } from "./icons";
import * as fs from 'fs';

export function LoadSVG(input : string) : string 
{
    // if the input ends with a .svg, the user probably wants to load the file and use it
    if(input.endsWith('.svg')) {
        return LoadSVGFromFile(input);
    }

    // if the input starts with '<', the user wants to use a dynamic string
    if(input.startsWith('<')) {
        return TrimSVGHeader(input);
    }

    // neither, the user want a built-in one
    let response = GetIcon(input);
    if(response != undefined) {
        return response;
    }

    // unable decipher what the user wants... log it and return an empty string
    console.error(`Failed to decipher input "${input} in LoadSVG..."`);
    return '';
}

function LoadSVGFromFile(filepath: string) : string
{
    let svgContent = fs.readFileSync(filepath, {encoding: 'utf-8', flag: 'r'});
    return TrimSVGHeader(svgContent);;
}

function TrimSVGHeader(svgContent : string) : string
{
    // if it's wrapped with an svg tag, we need to remove it... only need the content
    if(svgContent.startsWith('<svg'))
    {
        svgContent = svgContent.substring(svgContent.indexOf('>') + 1, svgContent.lastIndexOf('<'));
    }
    return svgContent;
}