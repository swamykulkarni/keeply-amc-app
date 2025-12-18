import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/device_provider.dart';

class DevicesScreen extends StatelessWidget {
  const DevicesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My Devices'),
        backgroundColor: Colors.white,
        foregroundColor: Colors.black,
        elevation: 0,
      ),
      body: Consumer<DeviceProvider>(
        builder: (context, provider, _) {
          return ListView.builder(
            padding: const EdgeInsets.all(16),
            itemCount: provider.devices.length,
            itemBuilder: (context, index) {
              final device = provider.devices[index];
              return Card(
                margin: const EdgeInsets.only(bottom: 12),
                child: ListTile(
                  leading: Icon(device.icon, color: const Color(0xFF1B5E5E)),
                  title: Text(device.name),
                  subtitle: Text(device.isOn ? 'On' : 'Off'),
                  trailing: Switch(
                    value: device.isOn,
                    onChanged: (value) => provider.toggleDevice(index),
                    activeColor: const Color(0xFF1B5E5E),
                  ),
                ),
              );
            },
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        backgroundColor: const Color(0xFF1B5E5E),
        child: const Icon(Icons.add),
      ),
    );
  }
}
