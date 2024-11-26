namespace backend.Models
{
    public class Course
    {
        public int CourseID { get; set; }
        public string Title { get; set; }
		public string Credits { get; set; }

        public List<Enrollment>? Enrollments { get; set; }
    }
}
