using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace vega.Controllers.Resources
{
    public class ModelResource : KeyValuePairResource
    {
        public ICollection<KeyValuePairResource> Models { get; set; }

        public ModelResource()
        {
            Models = new Collection<KeyValuePairResource>();
        }
    }
}