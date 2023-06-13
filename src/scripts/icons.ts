import { fluentui_icons } from "./fluentui_icons";

export function GetIcon(name : string) : string | undefined
{
    // use the generated fluentui dataset if the name starts with fluent
    if(name.startsWith('fluent-')) {
        name = name.replace('fluent-', '');
        return fluentui_icons[name];
    }

    return undefined;
}