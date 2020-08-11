const apiKey = 'jQDUuSBOeopYbaoI-l2_qleohsqhNKEtlFJN6oIjN8v5cLn-hUchljbRbvNU-QRnAYjlNZnx0psU2e3rc2XSBW1SaJl05UcleZ8OgmNA8Gos0P7R69AEBHLdC_gxX3Yx';

const Yelp = {
  searchBy(term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {headers:{
        Authorization: `Bearer ${apiKey}`
      }}
    ).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      if (jsonResponse.businesses){
        return jsonResponse.businesses.map((business) => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zipCode,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        });
      }
    });
  }
};

export default Yelp;
