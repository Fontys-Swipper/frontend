using SwipperBackup.Models;
using System.IO;
using Newtonsoft.Json;

namespace SwipperBackup.Data
{
    public class LocalStorage
    {
        public List<User> Users { get; set; }
        public List<Listing> Listings { get; set; }

        public LocalStorage()
        {
            LoadLists();
        }

        public void SaveLists()
        {
            string basePath = AppDomain.CurrentDomain.BaseDirectory;
            string dataPath = Path.Combine(basePath, "Data");

            if (!Directory.Exists(dataPath))
                Directory.CreateDirectory(dataPath);

            string usersFilePath = Path.Combine(dataPath, "Users.json");
            string listingsFilePath = Path.Combine(dataPath, "Listings.json");

            File.WriteAllText(usersFilePath, JsonConvert.SerializeObject(Users));
            File.WriteAllText(listingsFilePath, JsonConvert.SerializeObject(Listings));
        }

        public void LoadLists()
        {
            string basePath = AppDomain.CurrentDomain.BaseDirectory;
            string dataPath = Path.Combine(basePath, "Data");

            string usersFilePath = Path.Combine(dataPath, "Users.json");
            string listingsFilePath = Path.Combine(dataPath, "Listings.json");

            if (File.Exists(usersFilePath))
                Users = JsonConvert.DeserializeObject<List<User>>(File.ReadAllText(usersFilePath));
            else
                Users = new List<User>();

            if (File.Exists(listingsFilePath))
                Listings = JsonConvert.DeserializeObject<List<Listing>>(File.ReadAllText(listingsFilePath));
            else
                Listings = new List<Listing>();
        }
    }
}
