import { gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_CONTENT_API ?? '';

export const getFeed = async () => {
  const FEED_QUERY = gql`
    {
      feeds(orderBy: date_DESC) {
        id
        title
        date
        link
        video
        imageLink
        richText {
          html
        }
      }
    }
  `;

  const result = await request(graphqlAPI, FEED_QUERY);
  return result.feeds;
};
