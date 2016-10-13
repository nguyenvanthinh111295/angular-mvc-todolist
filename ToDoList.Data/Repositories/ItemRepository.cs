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

        public void DeleteItem(Item item)
        {
            _db.Items.Remove(item);
            _db.SaveChanges();
        }

        public IEnumerable<Item> GetAll()
        {
            var items = _db.Items.ToList();
            return items;
        }

        public Item GetItemById(int id)
        {
            var item = _db.Items.ToList().Find(i => i.Id == id);
            return item;
        }

        public IEnumerable<Item> GetLabelItemsByLabelId(int labelId)
        {
            var items = _db.Items.Where(i => i.LabelId == labelId);
            return items;
        }

        public void InsertItem(Item item)
        {
            _db.Items.Add(item);
            _db.SaveChanges();
        }
    }
}
