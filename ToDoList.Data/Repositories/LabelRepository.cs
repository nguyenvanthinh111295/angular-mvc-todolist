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
        private ToDoListContext _tdlContext;

        public LabelRepository(ToDoListContext tdlContext)
        {
            _tdlContext = tdlContext;
        }

        public void DeleteLabel(Label label)
        {
            _tdlContext.Labels.Remove(label);
            Save();
        }

        public IEnumerable<Label> GetLabels()
        {
            var labels = _tdlContext.Labels.ToList();
            return labels;
        }

        public Label GetLabelById(int id)
        {
            var label = _tdlContext.Labels.ToList().Find(l => l.Id == id);
            return label;
        }

        public void InsertLabel(Label label)
        {
            _tdlContext.Labels.Add(label);
            Save();
        }

        public void UpdateLabel(Label label)
        {
            _tdlContext.Entry(label).State = EntityState.Modified;
            Save();
        }

        public void Save()
        {
            _tdlContext.SaveChanges();
        }

        private bool disposed;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _tdlContext.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
