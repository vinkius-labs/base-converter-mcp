import { createPresenter, ui } from '@mcpfusion/core';
import { defineModel } from '@mcpfusion/core';

const BaseResponseModel = defineModel('BaseResponse', (m) => {
    m.casts({
        success: m.boolean('Success flag'),
        result: m.string('JSON stringified result'),
        error: m.string('Optional error')
    });
});

export const BaseResponsePresenter = createPresenter('BaseResponse')
  .schema(BaseResponseModel as any)
  .rules(['Display the base conversion result.'])
  .ui((data: any) => {
      if (!data.success) return [ui.markdown(`❌ **Error:** ${data.error}` as string)];
      return [ui.markdown(`✅ **Result:**\n\`\`\`json\n${JSON.stringify(data.result, null, 2)}\n\`\`\`` as string)];
  });
