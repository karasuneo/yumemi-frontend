import { expect, test } from '@playwright/test';

import { PREFECTURES } from '../const/prefectures';

test('初回レンダリング時 ~ データフェッチ前に必要な文字列が含まれているか', async ({
  page,
}) => {
  await page.goto('/');
  expect(await page.innerText('h1')).toBe(
    'ゆめみフロントエンドコーディングテスト',
  );
  expect(await page.innerText('h2')).toBe('種類別人口構成グラフ表示');
  page.getByRole('heading', { name: '都道府県を選択' });
  page.getByRole('heading', { name: '都道府県を選択してください' });
});

test('都道府県チェックボックスが動的に生成されているか', async ({ page }) => {
  await page.goto('/');
  PREFECTURES.forEach((prefecture) => {
    page.getByRole('checkbox', { name: prefecture });
  });
});

test('ボタンを押すと表示される人口グラフの種類が遷移するようになるか', async ({
  page,
}) => {
  await page.goto('/');
  await page
    .locator('label')
    .filter({ hasText: '長崎県' })
    .getByRole('switch')
    .click();
  await page
    .locator('label')
    .filter({ hasText: '熊本県' })
    .getByRole('switch')
    .click();
  page.getByRole('heading', { name: '総人口グラフ' });
  await page.getByRole('button').nth(1).click();
  page.getByRole('heading', { name: '年少人口グラフ' });
  page.locator('canvas');
  await page.getByRole('button').nth(1).click();
  page.getByRole('heading', { name: '生産年齢人口グラフ' });
  page.locator('canvas');
  await page.getByRole('button').nth(1).click();
  page.locator('canvas');
  page.getByRole('heading', { name: '老年人口グラフ' });
  page.locator('canvas');
  await page.getByRole('button').nth(1).click();
  page.locator('canvas');
  page.getByRole('heading', { name: '総人口グラフ' });
});

test('都道府県が選択されていない場合、その旨を知らせるメッセージがあるか', async ({
  page,
}) => {
  await page.goto('/');
  page.getByRole('heading', { name: '都道府県を選択してください' });
  await page
    .locator('label')
    .filter({ hasText: '長崎県' })
    .getByRole('switch')
    .click();
  await page
    .locator('label')
    .filter({ hasText: '熊本県' })
    .getByRole('switch')
    .click();
  await page
    .locator('label')
    .filter({ hasText: '長崎県' })
    .getByRole('switch')
    .click();
  await page
    .locator('label')
    .filter({ hasText: '熊本県' })
    .getByRole('switch')
    .click();
  page.getByRole('heading', { name: '都道府県を選択してください' });
});
