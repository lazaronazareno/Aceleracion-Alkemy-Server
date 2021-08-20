const { Testimonial } = require('../models/index');

const createTestimonial = async (req, res) => {
  try {
    const testimonialCreated = await Testimonial.create(req.body);
    return res.status(200).json({
      ok: true,
      data: testimonialCreated,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error,
    });
  }
};

const deleteTestimonial = async (req, res) => {
  const { id } = req.params;

  try {
    testimonial = await Testimonial.findByPk(id);

    if (!testimonial) {
      return res.status(404).json({
        ok: false,
        msg: `No testimoneal found with id = ${id}`,
      });
    }

    await Testimonial.destroy({ where: { id } });

    res.json({
      ok: true,
      msg: `Object with id:${id} succesfully deleted`,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      data: error,
    });
  }
};

const updateTestimonial = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const foundTestimonials = await Testimonial.findByPk(id);
    if (!foundTestimonials) {
      return res.status(404).json({
        ok: false,
        msg: `No testimonials found with id= ${id}`
      });
    }
    const updatedTestimonial = await foundTestimonials.update(updatedData);
    res.status(200).json({
      data: updatedTestimonial,
      ok: true
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Unknown error, contact admin',
      error,
    });
  }
}

const getTestimonialsList = async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll();

    res.json({
      data: testimonials,
      ok: true
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Unknown error, contact admin',
      error,
    });
  }
};


module.exports = {
  createTestimonial,
  deleteTestimonial,
  updateTestimonial,
  getTestimonialsList
};
