#!/bin/bash

# Simple EC2 Upload Script
# Usage: ./upload-to-ec2.sh your-ec2-ip your-key-file.pem

if [ $# -ne 2 ]; then
    echo "Usage: $0 <ec2-ip> <key-file>"
    echo "Example: $0 54.123.45.67 my-key.pem"
    exit 1
fi

EC2_IP=$1
KEY_FILE=$2

echo "🚀 Uploading Halal Restaurant website to EC2..."

# Check if key file exists
if [ ! -f "$KEY_FILE" ]; then
    echo "❌ Key file not found: $KEY_FILE"
    exit 1
fi

# Upload files
echo "📁 Uploading files..."
scp -i "$KEY_FILE" -r ./* ec2-user@$EC2_IP:/tmp/

# Set up on EC2
echo "⚙️ Setting up on EC2..."
ssh -i "$KEY_FILE" ec2-user@$EC2_IP << 'EOF'
    # Install Apache if not installed
    sudo yum install httpd -y
    sudo systemctl start httpd
    sudo systemctl enable httpd
    
    # Copy files to web directory
    sudo cp -r /tmp/* /var/www/html/
    sudo chown -R apache:apache /var/www/html
    sudo chmod -R 755 /var/www/html
    
    # Clean up
    sudo rm -rf /tmp/*
    
    # Restart Apache
    sudo systemctl restart httpd
    
    echo "✅ Website deployed successfully!"
    echo "🌐 Visit: http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)"
EOF

echo "🎉 Upload complete!"
echo "🌐 Your website is now live at: http://$EC2_IP"
