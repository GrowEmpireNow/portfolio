import { gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_CONTENT_API ?? '';

export const getSocial = async () => {
  const SOCIAL_QUERY = gql`
    {
      socials {
        id
        link
        embed
      }
    }
  `;

  const result = await request(graphqlAPI, SOCIAL_QUERY);
  return result.socials;
};
