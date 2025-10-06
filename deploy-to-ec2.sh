#!/bin/bash

# EC2 Deployment Script for Halal Restaurant Website
# Run this script from your local machine

echo "🚀 Deploying Halal Restaurant Website to EC2..."

# Configuration - UPDATE THESE VALUES
EC2_HOST="your-ec2-ip-address"
EC2_USER="ec2-user"
KEY_FILE="path/to/your-key.pem"
LOCAL_DIR="/Users/sparsh/Desktop/halal restaurant"

# Check if required files exist
if [ ! -f "$KEY_FILE" ]; then
    echo "❌ Key file not found: $KEY_FILE"
    echo "Please update the KEY_FILE path in this script"
    exit 1
fi

if [ ! -d "$LOCAL_DIR" ]; then
    echo "❌ Local directory not found: $LOCAL_DIR"
    echo "Please update the LOCAL_DIR path in this script"
    exit 1
fi

echo "📁 Uploading website files to EC2..."

# Create website directory on EC2
ssh -i "$KEY_FILE" "$EC2_USER@$EC2_HOST" "sudo mkdir -p /var/www/html/halal-restaurant"

# Upload all website files
scp -i "$KEY_FILE" -r "$LOCAL_DIR"/* "$EC2_USER@$EC2_HOST:/tmp/"

# Move files to web directory and set permissions
ssh -i "$KEY_FILE" "$EC2_USER@$EC2_HOST" << 'EOF'
    sudo cp -r /tmp/* /var/www/html/halal-restaurant/
    sudo chown -R apache:apache /var/www/html/halal-restaurant
    sudo chmod -R 755 /var/www/html/halal-restaurant
    sudo rm -rf /tmp/*
EOF

echo "✅ Website files uploaded successfully!"

# Configure Apache virtual host
echo "⚙️ Configuring Apache..."

ssh -i "$KEY_FILE" "$EC2_USER@$EC2_HOST" << 'EOF'
    # Create virtual host configuration
    sudo tee /etc/httpd/conf.d/halal-restaurant.conf > /dev/null << 'VHOST'
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /var/www/html/halal-restaurant
    
    <Directory /var/www/html/halal-restaurant>
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog /var/log/httpd/halal-restaurant_error.log
    CustomLog /var/log/httpd/halal-restaurant_access.log combined
</VirtualHost>
VHOST

    # Restart Apache
    sudo systemctl restart httpd
    sudo systemctl status httpd
EOF

echo "🎉 Deployment complete!"
echo "🌐 Your website should be available at: http://$EC2_HOST"
echo ""
echo "📋 Next steps:"
echo "1. Configure your domain name to point to $EC2_HOST"
echo "2. Set up SSL certificate with Let's Encrypt"
echo "3. Test your website functionality"
