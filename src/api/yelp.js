import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer o6EsAmIqZws0URK9oRlf1-rjLuNCrEP_0s4CSNEE5BN_46vZxMoVz6Rl0EMIFuPi2IgUSZ9z0lKI-CA69vu4xsXRX8b4QegAH1IgBdKgJANzPNBv7GqkSSL-X7EbXnYx',
  }
});
