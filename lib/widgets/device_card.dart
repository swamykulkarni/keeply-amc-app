import 'package:flutter/material.dart';
import '../models/device.dart';

class DeviceCard extends StatelessWidget {
  final Device device;

  const DeviceCard({super.key, required this.device});

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 2,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12),
          color: device.isOn ? const Color(0xFF1B5E5E).withOpacity(0.1) : Colors.white,
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              device.icon,
              size: 40,
              color: device.isOn ? const Color(0xFF1B5E5E) : Colors.grey,
            ),
            const SizedBox(height: 8),
            Text(
              device.name,
              textAlign: TextAlign.center,
              style: const TextStyle(fontWeight: FontWeight.w500),
            ),
            const SizedBox(height: 4),
            Text(
              device.isOn ? 'On' : 'Off',
              style: TextStyle(
                fontSize: 12,
                color: device.isOn ? const Color(0xFF1B5E5E) : Colors.grey,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
