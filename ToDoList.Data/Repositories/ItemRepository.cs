using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoList.Data.Repositories
{
    public class ItemRepository : IItemRepository
    {
        private ToDoListContext _db = null;

        public ItemRepository()
        {
            this._db = new ToDoListContext();
        }

        public IEnumerable<Item> GetAll()
        {
            var items = _db.Items.ToList();
            return items;
        }

        public void InsertItem(Item item)
        {
            _db.Items.Add(item);
            _db.SaveChanges();
        }
    }
}
