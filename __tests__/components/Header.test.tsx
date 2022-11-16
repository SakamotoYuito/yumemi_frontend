/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HeaderComponent } from 'src/components/Header';

describe('HeaderComponent', () => {
  it('ヘッダーにタイトルがあるか', async () => {
    render(<HeaderComponent />);
    const title = screen.getByText('ゆめみフロントエンドコーディング試験アプリ');
    expect(title).toBeInTheDocument();
  });
});
