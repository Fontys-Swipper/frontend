namespace SwipperBackup.Models
{
    public class Listing
    {
        public int Id { get; set; }
        public string AnimalName { get; set; }
        public string AnimalSpecies { get; set; }
        public string AnimalImageLink { get; set; }

        public Listing(int id, string animalName, string animalSpecies, string animalImageLink)
        {
            Id = id;
            AnimalName = animalName;
            AnimalSpecies = animalSpecies;
            AnimalImageLink = animalImageLink;
        }
    }
}
