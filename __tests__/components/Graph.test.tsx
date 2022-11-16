/**
 * @jest-environment jsdom
 */
/* eslint-disable import/named */

import '@testing-library/jest-dom';
import { render, screen, renderHook } from '@testing-library/react';
import { Middleware, SWRConfig, SWRResponse } from 'swr';
import { useFormMethods } from 'src/hooks/useFormMethods';
import { GraphComponent } from 'src/components/Graph';
import { FormProvider } from 'react-hook-form';

const mockData: any[] = [];

describe('GraphComponent', () => {
  it('都道府県を1つも選択していないときに「都道府県を選択してください。」という表示が出るか', () => {
    const mockSWRMiddleware: Middleware = () => {
      return (): SWRResponse<any, any> => {
        return {
          data: mockData,
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
          <GraphComponent />
        </FormProvider>
      </SWRConfig>,
    );
    const xLabel = screen.getByText('都道府県を選択してください。');
    expect(xLabel).toBeInTheDocument();
  });
});
