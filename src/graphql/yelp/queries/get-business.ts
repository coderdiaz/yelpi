export const getBusinessQuery = /* GraphQL */`
  query getBusinessQuery (
    $id: String
  ) {
    business(id: $id) {
      name
      url
      hours {
        hours_type
        is_open_now
        open {
          start
          end
          day
        }
      }
      coordinates {
        latitude
        longitude
      }
      location {
        formatted_address
      }
      price
      phone
      rating
      review_count
      display_phone
      photos
      reviews {
        rating
        text
        user {
          name
          image_url
        }
        time_created
      }
    }
  }
`;