import { gql } from "apollo-server-express";

const productSchema = gql`
  type Product {
    id: ID!
    name: String!
    nameSeller: String!
    image: String!
    price: Float!
    type: String!
    simpleProduct: SimpleProduct
    rentProduct: RentProduct
    spaceProduct: SpaceProduct
  }

  type SimpleProduct {
    inventory: Int
  }

  type RentProduct {
     rentType: String
     rentedDays: String
  }

  type SpaceProduct {
    rentedDays: String
    location: String
  }

  type Query {
    products: [Product!]!
  }

`;

export default productSchema;