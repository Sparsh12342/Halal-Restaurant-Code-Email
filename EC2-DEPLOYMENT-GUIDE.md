# 🚀 Amazon EC2 Deployment Guide

## Prerequisites
- AWS Account
- EC2 Instance running (Amazon Linux 2023)
- Domain name (optional)

## Step 1: EC2 Instance Setup

### Launch EC2 Instance
1. Go to AWS Console → EC2
2. Click "Launch Instance"
3. Choose **Amazon Linux 2023**
4. Select **t2.micro** (free tier)
5. Create new key pair or use existing
6. Configure Security Group:
   - HTTP (80) - 0.0.0.0/0
   - HTTPS (443) - 0.0.0.0/0
   - SSH (22) - Your IP only

### Connect to Instance
```bash
ssh -i "your-key.pem" ec2-user@your-instance-ip
```

## Step 2: Install Web Server

```bash
# Update system
sudo yum update -y

# Install Apache
sudo yum install httpd -y

# Start Apache
sudo systemctl start httpd
sudo systemctl enable httpd

# Check status
sudo systemctl status httpd
```

## Step 3: Upload Website Files

### Method 1: Using SCP (Recommended)
```bash
# From your local machine
scp -i "your-key.pem" -r /Users/sparsh/Desktop/halal\ restaurant/* ec2-user@your-instance-ip:/tmp/

# On EC2 instance
sudo cp -r /tmp/* /var/www/html/
sudo chown -R apache:apache /var/www/html
sudo chmod -R 755 /var/www/html
```

### Method 2: Using Git
```bash
# On EC2 instance
sudo yum install git -y
cd /var/www/html
sudo git clone https://github.com/Sparsh12342/Halal-Restaurant-Code-Email.git
sudo mv Halal-Restaurant-Code-Email/* .
sudo chown -R apache:apache /var/www/html
sudo chmod -R 755 /var/www/html
```

## Step 4: Configure Apache

```bash
# Create virtual host
sudo nano /etc/httpd/conf.d/halal-restaurant.conf
```

Add this configuration:
```apache
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /var/www/html
    
    <Directory /var/www/html>
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog /var/log/httpd/halal-restaurant_error.log
    CustomLog /var/log/httpd/halal-restaurant_access.log combined
</VirtualHost>
```

Restart Apache:
```bash
sudo systemctl restart httpd
```

## Step 5: Set Up SSL Certificate (Optional)

```bash
# Install Certbot
sudo yum install certbot python3-certbot-apache -y

# Get SSL certificate
sudo certbot --apache -d your-domain.com

# Auto-renewal
sudo crontab -e
# Add this line:
# 0 12 * * * /usr/bin/certbot renew --quiet
```

## Step 6: Configure Domain (Optional)

1. Go to your domain registrar
2. Add A record pointing to your EC2 public IP
3. Wait for DNS propagation (up to 48 hours)

## Step 7: Test Your Website

1. Open browser and go to: `http://your-ec2-ip` or `http://your-domain.com`
2. Test all functionality:
   - Navigation
   - Mobile responsiveness
   - Category links
   - Product links
   - Cart functionality

## Troubleshooting

### Check Apache Logs
```bash
sudo tail -f /var/log/httpd/error_log
sudo tail -f /var/log/httpd/access_log
```

### Check File Permissions
```bash
ls -la /var/www/html/
sudo chown -R apache:apache /var/www/html
sudo chmod -R 755 /var/www/html
```

### Restart Services
```bash
sudo systemctl restart httpd
sudo systemctl status httpd
```

## Security Best Practices

1. **Keep system updated:**
   ```bash
   sudo yum update -y
   ```

2. **Configure firewall:**
   ```bash
   sudo yum install firewalld -y
   sudo systemctl start firewalld
   sudo firewall-cmd --permanent --add-service=http
   sudo firewall-cmd --permanent --add-service=https
   sudo firewall-cmd --reload
   ```

3. **Regular backups:**
   ```bash
   # Create backup script
   sudo crontab -e
   # Add: 0 2 * * * tar -czf /backup/website-$(date +%Y%m%d).tar.gz /var/www/html
   ```

## Cost Optimization

- Use **t2.micro** for free tier
- Set up **billing alerts**
- Consider **Reserved Instances** for long-term hosting
- Use **CloudFront** for better performance

## Support

If you encounter issues:
1. Check AWS documentation
2. Review Apache error logs
3. Verify security group settings
4. Test connectivity from different networks
