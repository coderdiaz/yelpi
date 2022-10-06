export const searchBusinessesQuery = /* GraphQL */`
  query searchBusinesses(
    $term: String
    $latitude: Float
    $longitude: Float
  ) {
    search (
      latitude: $latitude
      longitude: $longitude
      term: $term
    ) {
      business {
        id
        name
        categories {
          title
        }
        location {
          city
          country
          formatted_address
        }
        rating
        review_count
        photos
      }
      total
    }
  }
`;