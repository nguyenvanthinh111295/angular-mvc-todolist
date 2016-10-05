using System;
using System.Collections.Generic;
using System.Linq;

namespace ToDoList.Data.Repositories
{
    public class ItemRepository : IItemRepository
    {
        private ToDoListContext _db = null;

        public ItemRepository()
        {
            this._db = new ToDoListContext();
        }

        public IEnumerable<Item> GetAllItems()
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
