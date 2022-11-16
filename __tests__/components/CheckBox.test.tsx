/**
 * @jest-environment jsdom
 */
/* eslint-disable import/named */

import '@testing-library/jest-dom';
import { render, screen, renderHook } from '@testing-library/react';
import { Middleware, SWRConfig, SWRResponse } from 'swr';
import { useFormMethods } from 'src/hooks/useFormMethods';
import { PrefecturesCheckBoxComponent } from 'src/components/CheckBox';
import { FormProvider } from 'react-hook-form';

const mockPrefecturesData = [
  '北海道',
  '青森県',
  '岩手県',
  '宮城県',
  '秋田県',
  '山形県',
  '福島県',
  '茨城県',
  '栃木県',
  '群馬県',
  '埼玉県',
  '千葉県',
  '東京都',
  '神奈川県',
  '新潟県',
  '富山県',
  '石川県',
  '福井県',
  '山梨県',
  '長野県',
  '岐阜県',
  '静岡県',
  '愛知県',
  '三重県',
  '滋賀県',
  '京都府',
  '大阪府',
  '兵庫県',
  '奈良県',
  '和歌山県',
  '鳥取県',
  '島根県',
  '岡山県',
  '広島県',
  '山口県',
  '徳島県',
  '香川県',
  '愛媛県',
  '高知県',
  '福岡県',
  '佐賀県',
  '長崎県',
  '熊本県',
  '大分県',
  '宮崎県',
  '鹿児島県',
  '沖縄県',
].map((value, index) => {
  return { prefName: value, prefCode: index + 1 };
});

describe('CheckBox', () => {
  it('47都道府県の名前があるか', async () => {
    const mockSWRMiddleware: Middleware = () => {
      return (): SWRResponse<any, any> => {
        return {
          data: { result: mockPrefecturesData },
          error: undefined,
          mutate: (_) => Promise.resolve(),
          isValidating: false,
        };
      };
    };

    const hook = renderHook(() => useFormMethods());

    render(
      <SWRConfig value={{ use: [mockSWRMiddleware] }}>
        <FormProvider {...hook.result.current.methods}>
          <PrefecturesCheckBoxComponent />
        </FormProvider>
      </SWRConfig>,
    );

    mockPrefecturesData.forEach(({ prefName }) => {
      const checkBoxLabel = screen.getByLabelText(prefName);
      expect(checkBoxLabel).toBeInTheDocument();
    });
  });
});
