import axios from 'axios';

const base_url = "https://swipperresource.azurewebsites.net/api/listing"
const likeanimal = "https://swipperresource.azurewebsites.net/api/LikeAnimal"
const favoriteanimal = 'https://swipperresource.azurewebsites.net/api/User'
const listingsForUser = "https://swipperresource.azurewebsites.net/api/GetListingsForUser"

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
    return axios.get("https://swipperresource.azurewebsites.net/api/GetListingByOwner?ownerId="+ownerId)
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
    return axios.post(likeanimal+"?userId="+userId+"&animalId="+listingId)
}

// Get favorites animals from users
export async function favorite_animal(userId) {
    return axios.get(favoriteanimal +'/GetFavoriteListings'+'?userId='+userId)
}

export async function get_listings_forUser(ownerId) {
    return axios.get(listingsForUser+"?id="+ownerId)
}
