import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const AddLand = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    size: "",
    landType: "agricultural", // agricultural or development
    description: "",
    features: "",
    contactPhone: "",
    contactEmail: "",
    images: [],
    // Agricultural specific fields
    cropType: "",
    soilType: "",
    irrigation: false,
    // Development specific fields
    zoning: "",
    utilities: false,
    roadAccess: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      images: files
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call to save the land listing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message and redirect
      alert("Land listing added successfully!");
      navigate("/dashboard");
    } catch (error) {
      alert("Error adding land listing. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user) {
    return (
      <div className="error-container">
        <h2>Access Denied</h2>
        <p>Please login to add land listings.</p>
      </div>
    );
  }

  return (
    <div className="add-land-container">
      <div className="page-header">
        <h1 className="page-title">Add New Land Listing</h1>
        <p className="page-subtitle">List your land for rent and reach potential tenants</p>
      </div>

      <div className="add-land-form-container">
        <form onSubmit={handleSubmit} className="add-land-form">
          {/* Basic Information */}
          <div className="form-section">
            <h3 className="section-title">Basic Information</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="title">Property Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter property title"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="location">Location *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="City, State"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="price">Price per Acre/Month *</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  placeholder="Enter price"
                  min="0"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="size">Size (Acres) *</label>
                <input
                  type="number"
                  id="size"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  required
                  placeholder="Enter size in acres"
                  min="0"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="landType">Land Type *</label>
              <select
                id="landType"
                name="landType"
                value={formData.landType}
                onChange={handleChange}
                required
              >
                <option value="agricultural">Agricultural Land</option>
                <option value="development">Development Land</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Describe your land, its features, and what makes it special..."
                rows="4"
              />
            </div>
          </div>

          {/* Agricultural Land Specific Fields */}
          {formData.landType === "agricultural" && (
            <div className="form-section">
              <h3 className="section-title">Agricultural Details</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cropType">Crop Type</label>
                  <select
                    id="cropType"
                    name="cropType"
                    value={formData.cropType}
                    onChange={handleChange}
                  >
                    <option value="">Select crop type</option>
                    <option value="corn">Corn</option>
                    <option value="wheat">Wheat</option>
                    <option value="soybeans">Soybeans</option>
                    <option value="cotton">Cotton</option>
                    <option value="rice">Rice</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="fruits">Fruits</option>
                    <option value="livestock">Livestock</option>
                    <option value="mixed">Mixed Farming</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="soilType">Soil Type</label>
                  <select
                    id="soilType"
                    name="soilType"
                    value={formData.soilType}
                    onChange={handleChange}
                  >
                    <option value="">Select soil type</option>
                    <option value="clay">Clay</option>
                    <option value="sandy">Sandy</option>
                    <option value="loamy">Loamy</option>
                    <option value="silt">Silt</option>
                    <option value="chalky">Chalky</option>
                  </select>
                </div>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="irrigation"
                    checked={formData.irrigation}
                    onChange={handleChange}
                  />
                  <span className="checkmark"></span>
                  Irrigation Available
                </label>
              </div>
            </div>
          )}

          {/* Development Land Specific Fields */}
          {formData.landType === "development" && (
            <div className="form-section">
              <h3 className="section-title">Development Details</h3>
              
              <div className="form-group">
                <label htmlFor="zoning">Zoning Type</label>
                <select
                  id="zoning"
                  name="zoning"
                  value={formData.zoning}
                  onChange={handleChange}
                >
                  <option value="">Select zoning type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="mixed">Mixed Use</option>
                  <option value="agricultural">Agricultural</option>
                </select>
              </div>

              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="utilities"
                    checked={formData.utilities}
                    onChange={handleChange}
                  />
                  <span className="checkmark"></span>
                  Utilities Available
                </label>
                
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="roadAccess"
                    checked={formData.roadAccess}
                    onChange={handleChange}
                  />
                  <span className="checkmark"></span>
                  Road Access Available
                </label>
              </div>
            </div>
          )}

          {/* Contact Information */}
          <div className="form-section">
            <h3 className="section-title">Contact Information</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contactPhone">Phone Number</label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="contactEmail">Email Address</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder="Enter email address"
                />
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="form-section">
            <h3 className="section-title">Property Images</h3>
            <div className="form-group">
              <label htmlFor="images">Upload Images</label>
              <input
                type="file"
                id="images"
                name="images"
                onChange={handleImageChange}
                multiple
                accept="image/*"
              />
              <p className="form-help">You can select multiple images. Supported formats: JPG, PNG, GIF</p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate("/dashboard")}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading-spinner"></span>
                  Adding Listing...
                </>
              ) : (
                "Add Land Listing"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLand; 