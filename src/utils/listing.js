import axios from 'axios';

const base_url = 'https://swipperresource.azurewebsites.net/api/listing';
const likeanimal = 'https://swipperresource.azurewebsites.net/api/LikeAnimal';

//Get all listing
export async function get_all_listings() {
  return axios.get(base_url);
}

//Get listing by id
export async function get_listing(id) {
  return axios.get(base_url + '/' + id);
}

//Get users listing by ownerId
export async function get_listing_byowner(ownerId) {
  return axios.get(base_url + '/GetListingByOwner/' + ownerId);
}

//Add new listing to the database
export async function add_listing(listing) {
  return axios.post(base_url, listing);
}

//Delete listing by id
export async function delete_listing(id) {
  return axios.delete(base_url + '/' + id);
}

//Add animal to users liked animals by id
export async function like_animal(userId, listingId) {
  return axios.post(
    likeanimal + '?userId=' + userId + '&animalId=' + listingId,
  );
}
