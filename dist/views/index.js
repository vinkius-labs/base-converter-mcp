import { createPresenter, ui } from '@vurb/core';
import { defineModel } from '@vurb/core';
const BaseResponseModel = defineModel('BaseResponse', (m) => {
    m.casts({
        success: m.boolean('Success flag'),
        result: m.string('JSON stringified result'),
        error: m.string('Optional error')
    });
});
export const BaseResponsePresenter = createPresenter('BaseResponse')
    .schema(BaseResponseModel)
    .rules(['Display the base conversion result.'])
    .ui((data) => {
    if (!data.success)
        return [ui.markdown(`❌ **Error:** ${data.error}`)];
    return [ui.markdown(`✅ **Result:**\n\`\`\`json\n${JSON.stringify(data.result, null, 2)}\n\`\`\``)];
});
