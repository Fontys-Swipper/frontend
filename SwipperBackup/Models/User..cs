namespace SwipperBackup.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string LivingSpace { get; set; }
        public string Description { get; set; }

        public string CompanyName { get; set; }
        public bool HasPet { get; set; }
        public bool HasGarden { get; set; }

        public User(int id, string username, string firstname, string lastname, string password, string email, string address, string livingSpace, string description, string companyName, bool hasPet, bool hasGarden)
        {
            Id = id;
            Username = username;
            Firstname = firstname;
            Lastname = lastname;
            Password = password;
            Email = email;
            Address = address;
            LivingSpace = livingSpace;
            Description = description;
            CompanyName = companyName;
            HasPet = hasPet;
            HasGarden = hasGarden;
        }
    }
}
