import vercelConfig from '../../vercel.json';
import { CV } from '../helpers/constants';

const headersFor = (source) =>
  vercelConfig.headers.find((rule) => rule.source === source).headers;

test('BUILD-13 vercel.json sends the CV with the file name from constants.js', () => {
  expect(headersFor(CV.href)).toContainEqual({
    key: 'Content-Disposition',
    value: `attachment; filename="${CV.fileName}"`,
  });
});

test('BUILD-15 portfolio.json is sent with an open CORS header', () => {
  expect(headersFor('/portfolio.json')).toContainEqual({
    key: 'Access-Control-Allow-Origin',
    value: '*',
  });
});
