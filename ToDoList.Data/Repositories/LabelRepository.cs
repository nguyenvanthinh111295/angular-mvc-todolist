using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoList.Data.Repositories
{
    public class LabelRepository : ILabelRepository
    {
        private readonly ToDoListContext _db;

        public LabelRepository()
        {
            _db = new ToDoListContext();
        }

        public void DeleteLabel(Label label)
        {
            _db.Labels.Remove(label);
            Save();
        }

        public IEnumerable<Label> GetLabels()
        {
            var labels = _db.Labels.ToList();
            return labels;
        }

        public Label GetLabelById(int id)
        {
            var label = _db.Labels.ToList().Find(l => l.Id == id);
            return label;
        }

        public void InsertLabel(Label label)
        {
            _db.Labels.Add(label);
            Save();
        }

        public void UpdateLabel(Label label)
        {
            _db.Entry(label).State = EntityState.Modified;
            Save();
        }

        public void Save()
        {
            _db.SaveChanges();
        }

        public IEnumerable<Item> GetLabelsHaveItemById(int labelId)
        {
            var labels = _db.Items.Where(i => i.LabelId == labelId);
            return labels;
        }
    }
}
