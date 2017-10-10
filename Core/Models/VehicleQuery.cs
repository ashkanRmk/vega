namespace vega.Core.Models
{
    public class VehicleQuery
    {
        //Filtering Params
        public int? MakeId { get; set; }
        public int? ModelId { get; set; }

        //Sorting Params
        public string SortBy { get; set; }
        public bool IsSortAscending { get; set; }
    }
}