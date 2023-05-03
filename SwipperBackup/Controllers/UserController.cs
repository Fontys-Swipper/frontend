using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SwipperBackup.Data;
using SwipperBackup.Models;

namespace SwipperBackup.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private Data.LocalStorage _localStorage;

        public UserController(Data.LocalStorage localStorage)
        {
            _localStorage = localStorage;
        }

        // GET: api/Users
        [HttpGet]
        public List<User> GetUsers()
        {
            return _localStorage.Users.ToList();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public User GetUsers(int id)
        {
            return _localStorage.Users.FirstOrDefault(b => b.Id == id);
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult PutUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            var existingUser = _localStorage.Users.FirstOrDefault(u => u.Id == id);
            if (existingUser == null)
            {
                return NotFound();
            }

            existingUser.Username = user.Username;
            existingUser.Firstname = user.Firstname;
            existingUser.Lastname = user.Lastname;
            existingUser.Password = user.Password;
            existingUser.Email = user.Email;
            existingUser.Address = user.Address;
            existingUser.LivingSpace = user.LivingSpace;
            existingUser.Description = user.Description;
            existingUser.CompanyName = user.CompanyName;
            existingUser.HasPet = user.HasPet;
            existingUser.HasGarden = user.HasGarden;
            // Update other properties as needed
            _localStorage.SaveLists();
            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _localStorage.Users.Add(user);
            _localStorage.SaveLists();
            return CreatedAtAction(nameof(GetUsers), new { id = user.Id }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<User>>> DeleteBrand(int id)
        {
            User? foundUser = null;
            foreach (User user in _localStorage.Users)
            {
                if (user.Id == id)
                {
                    foundUser = user;
                    
                }
            }
            if (foundUser == null)
            {
                return NotFound();  
            }
                _localStorage.Users.Remove(foundUser);   
                _localStorage.SaveLists();
                return Ok(_localStorage.Users);
            
        }

        private bool UserExists(int id)
        {
            return _localStorage.Users.Any(e => e.Id == id);
        }
    }
}
