export async function convertBase(value: string, fromBase: number, toBase: number): { success: boolean, result?: string, error?: string } {
    if (!value || typeof value !== 'string') {
        return { success: false, error: 'Value must be a string.' };
    }
    
    if (fromBase < 2 || fromBase > 36 || toBase < 2 || toBase > 36) {
        return { success: false, error: 'Bases must be between 2 and 36.' };
    }
    
    const cleanValue = value.trim().toLowerCase();
    
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    const validChars = chars.slice(0, fromBase);
    const regex = new RegExp(`^[${validChars}]+$`);
    
    if (!regex.test(cleanValue)) {
        return { success: false, error: `Invalid characters found in value for base ${fromBase}.` };
    }

    try {
        let num = BigInt(0);
        const fromBaseBig = BigInt(fromBase);
        
        for (let i = 0; i < cleanValue.length; i++) {
            const charVal = BigInt(chars.indexOf(cleanValue[i]));
            num = (num * fromBaseBig) + charVal;
        }
        
        if (num === BigInt(0)) {
            return { success: true, result: '0' };
        }
        
        const toBaseBig = BigInt(toBase);
        let result = '';
        while (num > BigInt(0)) {
            const remainder = Number(num % toBaseBig);
            result = chars[remainder] + result;
            num = num / toBaseBig;
        }
        
        return { success: true, result: result };
    } catch (e) {
         return { success: false, error: 'Conversion failed due to math boundaries or format.' };
    }
}
