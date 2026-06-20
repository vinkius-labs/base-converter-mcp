import { f } from '../../f.js';
import { BaseResponsePresenter } from '../../views/index.js';
import { convertBase } from '../../engine/logic.js';

export const convertArbitraryBaseTool = f.action('convert_base')
    .describe('Converts a numeric string from any base (2-36) to another base (2-36) with infinite BigInt precision.')
    .instructions('Use this tool to convert numbers between arbitrary bases (like base 7 to base 21) precisely. Requires numeric string to prevent precision loss.')
    .withString('value', 'The numeric string to convert (e.g., "ff", "1010", "Z9").')
    .withNumber('fromBase', 'The base of the input value (e.g., 2 for binary, 16 for hex, 10 for decimal).')
    .withNumber('toBase', 'The base to convert the value into (e.g., 10 for decimal).')
    .returns(BaseResponsePresenter)
    .handle(async (i) => convertBase(i.value, i.fromBase, i.toBase));

export const convertHexToDecTool = f.action('convert_hex_to_dec')
    .describe('Dedicated tool to convert a Hexadecimal string (Base 16) into a Decimal string (Base 10).')
    .instructions('Use this tool specifically to decode HEX strings into standard base 10 decimal integers safely.')
    .withString('hex', 'The hexadecimal string (e.g., "1a3f").')
    .returns(BaseResponsePresenter)
    .handle(async (i) => convertBase(i.hex, 16, 10));

export const convertBinToDecTool = f.action('convert_bin_to_dec')
    .describe('Dedicated tool to convert a Binary string (Base 2) into a Decimal string (Base 10).')
    .instructions('Use this tool specifically to decode raw binary strings into standard base 10 decimal integers safely.')
    .withString('binary', 'The binary string (e.g., "101010").')
    .returns(BaseResponsePresenter)
    .handle(async (i) => convertBase(i.binary, 2, 10));
