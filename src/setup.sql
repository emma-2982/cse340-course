CREATE TABLE organization (
organization_id SERIAL PRIMARY KEY,
name VARCHAR(150) NOT NULL,
description TEXT NOT NULL,
contact_email VARCHAR(255) NOT NULL,
logo_filename VARCHAR(255) NOT NULL
);

-- ========================================
-- Insert sample data: Organizations
-- ========================================
INSERT INTO organization (name, description, contact_email, logo_filename)
VALUES
('BrightFuture Builders', ' A nonprofit focused on improving community infrastructure through sustainable construction projects.', 'info@brightfuturebuilders.org', ' brightfuture-logo.png '),
(' GreenHarvest Growers', 'An urban farming collective promoting food sustainability and education in local neighborhoods.', 'contact@greenharvest.org', 'greenharvest-logo.png' ),
('UnityServe Volunteers', 'A volunteer coordination group supporting local charities and service initiatives.', ' hello@unityserve.org', 'unityserve-logo.png');


INSERT INTO service_projects (organization_id, title, description, location, date)
VALUES
(1, 'Neighborhood Sidewalk Repair', 'Repairing cracked sidewalks to improve safety for pedestrians.', 'Maplewood District', '2024-03-12'),
(1, 'Community Center Painting', 'Repainting the interior of the community center to refresh the space.', 'Riverside Community Center', '2024-04-05'),
(1, 'Emergency Roof Fix', 'Fixing damaged roofs for low-income families after a storm.', 'Eastwood Homes', '2024-05-18'),
(1, 'Public Bench Installation', 'Installing new benches along walking paths for community use.', 'Hillcrest Park', '2024-06-09'),
(1, 'Flood Barrier Construction', 'Building temporary flood barriers to protect vulnerable homes.', 'South Creek', '2024-07-22');

INSERT INTO service_projects (organization_id, title, description, location, date)
VALUES
(2, 'Urban Orchard Planting', 'Planting fruit trees to support sustainable food sources.', 'GreenHarvest Orchard', '2024-03-25'),
(2, 'Hydroponics Training', 'Teaching families how to grow vegetables using hydroponics.', 'Learning Garden Lab', '2024-04-14'),
(2, 'Seedling Nursery Setup', 'Creating a seedling nursery for seasonal crop distribution.', 'GreenHarvest HQ', '2024-05-07'),
(2, 'Garden Fence Repair', 'Repairing fences around community gardens to prevent animal damage.', 'Westside Garden', '2024-06-16'),
(2, 'Herb Garden Expansion', 'Expanding herb garden plots for local culinary programs.', 'City Culinary Center', '2024-07-11');

INSERT INTO service_projects (organization_id, title, description, location, date)
VALUES
(3, 'Community Reading Night', 'Hosting a reading night for children to promote literacy.', 'UnityServe Hall', '2024-03-29'),
(3, 'Disaster Relief Kit Assembly', 'Assembling emergency kits for families affected by natural disasters.', 'Relief Warehouse', '2024-04-21'),
(3, 'Neighborhood Safety Workshop', 'Teaching safety practices and emergency preparedness.', 'City Library', '2024-05-19'),
(3, 'Senior Home Cleanup', 'Helping seniors with home cleaning and organization.', 'Sunrise Senior Home', '2024-06-13'),
(3, 'School Supply Packaging', 'Packaging school supplies for students in need.', 'Lincoln Elementary', '2024-07-27');
